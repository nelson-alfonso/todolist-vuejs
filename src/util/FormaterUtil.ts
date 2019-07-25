export default class FormaterUtil {

    static formatarData(data: string): String {
        let convertido = new Date(data);
        let dia = convertido.getDate() + 1;
        let mes = convertido.getMonth() + 1;
        let ano = convertido.getFullYear();
        return `${dia}/${mes}/${ano}`
    
    }
}