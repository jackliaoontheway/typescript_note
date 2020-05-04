function padLeft(value: string, padding: any) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
}

// 联合类型 string | number
function padLeft2(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
}


let s = 'hello';
s = null;

// --stricNullChecks
let s1 : string | null = 't';