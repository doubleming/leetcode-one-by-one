mod three_sum;
fn main() {
  use three_sum::Solution;
  let temp = vec![0,0,0]; 
  println!("{:?}", Solution::three_sum(temp))
}
