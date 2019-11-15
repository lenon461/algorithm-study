class Solution {
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        int a[50][50]={}, i, j, oddCell = 0;
        for(vector<int>& index : indices) {
            for(j=0;j<m;j++) a[index[0]][j]++;
            for(i=0;i<n;i++) a[i][index[1]]++;
        }
        for(i=0;i<n;i++) for(j=0;j<m;j++)
            oddCell += a[i][j] % 2;
        return oddCell;
    }
};