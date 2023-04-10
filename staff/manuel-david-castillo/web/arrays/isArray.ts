export default function isArray(array: any): boolean {
    if (typeof array === "object" && array instanceof Array) {
        return true
    } else {
        return false
    }
}