function solution(n, computers) {
  let answer = 0

  // 체크여부 배열
  const visited = Array(n).fill(0)

  function dfs(curr) {
    // 네트워크 그룹에 해당 컴퓨터가 포함되는지
    for (let i in curr) {
      // 컴퓨터 연결 확인 & 연결된 적 없을 때
      if (curr[i] === 1 && !visited[i]) {
        // 그룹에 포함됐다고 체크
        visited[i] = 1
        // 그룹에 이어서 포함되는지 체크
        dfs(computers[i])
      }
    }
  }

  for (let i in computers) {
    // 네트워크 그룹을 체크하는 부분
    if (visited[i] === 0) {
      visited[i] = 1
      answer++
      dfs(computers[i])
    }
  }

  return answer
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
)
