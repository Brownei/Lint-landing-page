import { Workbook } from 'exceljs'

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
        const workbook = new Workbook()
        try {
            const workSheet = await workbook.xlsx.readFile('../waiting-list.xlsx')
            const workExcelSheet = workSheet.getWorksheet()
            workExcelSheet?.addRow([this.name, this.email, this.country])
            await workbook.xlsx.writeFile('../waiting-list.xlsx')
        } catch (error) {
            console.log(error) 
        }
    }
}