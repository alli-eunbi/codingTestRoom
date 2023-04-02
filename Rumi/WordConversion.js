function solution(begin, target, words) {
  if (!words.includes(target)) return 0

  let answer = 0
  const visited = new Set()
  let temp = []
  const queue = []

  queue.push(begin)

  while (queue.length) {
    const str = queue.shift()
    // 방문 확인
    visited.add(str)

    // 지금 비교하는 문자가 정답이랑 같다면 정답 반환
    if (str === target) {
      return answer
    }

    for (let i = 0; i < str.length; i++) {
      // 비교할 문자
      const begin2 = sliceStr(str, i)

      // 방문한 적 없고 한글자를 제외하고 문자구조가 같을 때
      const isMatch = words.filter(
        (v) => !visited.has(v) && sliceStr(v, i) === begin2
      )
      // 다음 단계(큐)에 사용할 단어들 모음
      temp.push(...isMatch)
    }

    // 큐에 담긴 모든 것을 다 확인했을 때 === 레벨 확인 완료
    if (queue.length === 0) {
      answer++
      queue.push(...temp)
      temp = []
    }
  }

  // 한글자를 제외한 단어 반환 함수
  function sliceStr(str, i) {
    const strArr = [...str]
    strArr.splice(i, 1)
    return strArr.join('')
  }
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
