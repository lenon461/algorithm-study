#include <map>
using namespace std;
class Solution {
public:
	vector<int> twoSum(vector<int>& nums, int target) {
		vector<int> ans;
		map<int, vector<int>> p;
		int i;
		for (i = 0; i < nums.size(); i++)
			p[nums[i]].push_back(i);
		for (auto it = p.begin(); it != p.end(); ) {
			auto jt = p.find(target - it->first);
			if (jt != p.end() && (it->first != jt->first || it->second.size() > 1)) {
				ans = vector<int>{ it->second[0], it->first == jt->first ? it->second[1] : jt->second[0] };
					break;
			}
			it = p.erase(it);
		}
		return ans;
	}
};