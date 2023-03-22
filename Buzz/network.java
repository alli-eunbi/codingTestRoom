import java.util.*;

class Solution {
   private static boolean[] visited;

    public static int solution(int n, int[][] computers){
        
        int answer = 0;
        visited = new boolean[n]; // false 고정
        
        // 0번째 네트워크부터 dfs
        for (int i = 0 ; i < n ; i++) {
            
            if (visited[i]) {
                continue;
            }
            
            // 현재 네트워크 번호, 컴퓨터
            dfs(i, computers);
            answer++;
        }
        
        return answer;
    }
    
    public static void dfs(int computer, int[][] computers) {
        
        // 방문한 컴퓨터에 대한 체크
        visited[computer] = true;
        
        for (int j = 0 ; j < computers.length ; j++) {
            
            // 현재 컴퓨터거나, 방문했거나, 네트워크 연결이 있지 않으면 dfs 하지 않음
            if (computer == j || visited[j] || computers[computer][j] == 0) {
                continue;
            }
            dfs(j, computers);
        }
        
        
    }
}