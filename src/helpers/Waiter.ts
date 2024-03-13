import exceljs from 'exceljs'

export class EarlyWaiter {
    name: string;
    email: string;
    country: string;

    constructor(name: string, email: string, country: string) {
        this.name = name,
        this.email = email,
        this.country = country
    }

    public async addToWaitingList() {
        const workbook = new exceljs.Workbook()
        try {
            console.log('1')
            const workSheet = await workbook.xlsx.readFile('../../waiting-list.xlsx')
            console.log('2')
            const workExcelSheet = workSheet.getWorksheet()
            console.log('3')
            workExcelSheet?.addRow([this.name, this.email, this.country])
            console.log('4')
            await workbook.xlsx.writeFile('../waiting-list.xlsx')
            console.log('5')
        } catch (error) {
            console.log(error) 
        }

    }
}