export async function update () {
  return await fetch('https://secure-software-engineering.github.io/rose/example/base.json')
}

export function add (a: number, b: number): number {
  return a + b
}
