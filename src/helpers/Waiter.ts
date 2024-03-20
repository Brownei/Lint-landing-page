import * as XLSX from 'xlsx'

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
        const data: Record<string, string>[] = []
        data.push({
            name: this.name,
            email: this.email,
            country: this.country
        })
        try {
            const headers = ['Name', 'Email', 'Country'];
            const sheetData = [headers, ...data];
            const worksheet = XLSX.utils.json_to_sheet(sheetData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
            XLSX.writeFile(workbook, '../../waiting-list.xlsx');
        } catch (error) {
            console.log(error) 
        }

    }
}