class Solution {
public:
    int maxEqualFreq(vector<int>& nums) {
        int cnt[100001]{}, cnt2[100001]{};
        int ret = 0, c = 0;
        
        for (int i = 0; i < nums.size(); ++i) {
            if (cnt[nums[i]] && !--cnt2[cnt[nums[i]]]) c--;
            if (!cnt2[++cnt[nums[i]]]++) c++;
            
            if (c == 1 && (cnt[nums[i]] == 1 || cnt2[cnt[nums[i]]] == 1) ||
                c == 2 && (cnt2[cnt[nums[i]]] == 1 && cnt2[cnt[nums[i]] - 1] ||
                           cnt2[cnt[nums[i]]] && cnt2[cnt[nums[i]] + 1] == 1 ||
                           cnt2[1] == 1)) ret = i + 1;
        }
        
        return ret;
    }
};