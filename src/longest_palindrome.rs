pub fn longest_palindrome(s: String) -> String {
    let mut max_s = "";
    let data = s.chars().collect::<Vec<char>>();
    
    let mut get_palindrome = |mut p1: usize, mut p2: usize| {
        while p2 < s.len() {
            if data[p1] == data[p2] {
                if (p2 - p1 + 1) > max_s.len() {
                    max_s = &s[p1..(p2 + 1)];
                }
                if p1 == 0 {
                    break;
                }
                p1 -= 1;
                p2 += 1;
            } else {
                break;
            }
        }
    };
    
    for i in 0..s.len() {
        get_palindrome(i,i);
        get_palindrome(i, i+1);   
    }
    return max_s.to_string();
}
