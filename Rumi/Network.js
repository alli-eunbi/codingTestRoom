function solution(n, computers) {
  var answer = n // n개는 각각 네트워크로 시작

  const con = []
  const arr = []

  // bfs
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let currentCon = computers[i][j]
      console.log('i', i, 'j', j, 'curr', currentCon)
      // 현재쪽이 다른 컴퓨터하고 연결되었을 때
      if (i != j && currentCon === 1) {
        let otherCon = computers[j][i]
        // 양방향 연결
        // 다른쪽에서도 지금 컴퓨터를 연결했을 때

        if (!arr.includes(i)) {
          arr.push(i)
          console.log('넣는다 i', i)
        }
        if (!arr.includes(j)) {
          arr.push(j)
          console.log('넣는다 j', j)
        }
      }
    }
  }

  console.log(arr)
  if (arr.length) {
    answer = n - arr.length + 1
  }

  return answer
}

console.log(
  solution(4, [
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ])
)

// 1-2-3-4
