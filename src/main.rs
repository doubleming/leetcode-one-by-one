mod midNum;
fn main() {
  let n1 = vec![1,2];
  let n2 = vec![3,4];
  let num = midNum::find_median_sorted_arrays(n1.clone(), n2.clone());
  println!("{:?},{:?},{:?}", n1, n2, num);
  println!("{}", 5/2);
  println!("{}", 1/2);
}
