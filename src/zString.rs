pub fn convert(s: String, num_rows: i32) -> String {
    let num_rows = num_rows as usize;
    if num_rows == 1 {
        return  s;
    }
    let mut ss = vec![String::new(); num_rows];
    let mut i = 0;
    let mut down= true;
    for c in s.chars() {
        ss[i].push(c);
        if i == num_rows - 1 || i == 0 {
            down = !down ;
        }
        if down {
            i += 1 ;
        } else {
            i = i.checked_sub(1).unwrap_or(0)
        }
    }
    let mut res = String::new();
    for j in 0..num_rows {
        res += &ss[j]
    }
    return res;
}