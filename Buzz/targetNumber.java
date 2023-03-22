class Solution {
    public static int count = 0;

    public int solution(int[] numbers, int target) {
        int answer = 0;
        dfs(numbers, 0, target, 0);

        answer = count;

        return count;
    }
    
    public static void dfs(int[] numbers, int index, int target, int sum) {

        if (index == numbers.length) {
            if (sum == target) {
                count ++;
            }
            return;
        }
        
        int add = sum + numbers[index];
        int minus = sum - numbers[index];

        dfs(numbers, index + 1, target, add);
        dfs(numbers, index + 1, target, minus);
    }
}

