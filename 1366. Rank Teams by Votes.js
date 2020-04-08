const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[["ABC", "ACB", "ABC", "ACB", "ACB"]], "ACB"],
    // [[["WXYZ", "XYZW"]], "XWYZ"],
    // [[["ZMNAGUEDSJYLBOPHRQICWFXTVK"]], "ZMNAGUEDSJYLBOPHRQICWFXTVK"],
    // [
    //     [
    //         [
    //             "FVSHJIEMNGYPTQOURLWCZKAX",
    //             "AITFQORCEHPVJMXGKSLNZWUY",
    //             "OTERVXFZUMHNIYSCQAWGPKJL",
    //             "VMSERIJYLZNWCPQTOKFUHAXG",
    //             "VNHOZWKQCEFYPSGLAMXJIUTR",
    //             "ANPHQIJMXCWOSKTYGULFVERZ",
    //             "RFYUXJEWCKQOMGATHZVILNSP",
    //             "SCPYUMQJTVEXKRNLIOWGHAFZ",
    //             "VIKTSJCEYQGLOMPZWAHFXURN",
    //             "SVJICLXKHQZTFWNPYRGMEUAO",
    //             "JRCTHYKIGSXPOZLUQAVNEWFM",
    //             "NGMSWJITREHFZVQCUKXYAPOL",
    //             "WUXJOQKGNSYLHEZAFIPMRCVT",
    //             "PKYQIOLXFCRGHZNAMJVUTWES",
    //             "FERSGNMJVZXWAYLIKCPUQHTO",
    //             "HPLRIUQMTSGYJVAXWNOCZEKF",
    //             "JUVWPTEGCOFYSKXNRMHQALIZ",
    //             "MWPIAZCNSLEYRTHFKQXUOVGJ",
    //             "EZXLUNFVCMORSIWKTYHJAQPG",
    //             "HRQNLTKJFIEGMCSXAZPYOVUW",
    //             "LOHXVYGWRIJMCPSQENUAKTZF",
    //             "XKUTWPRGHOAQFLVYMJSNEIZC",
    //             "WTCRQMVKPHOSLGAXZUEFYNJI",
    //         ],
    //     ],
    //     "VWFHSJARNPEMOXLTUKICZGYQ",
    // ],
];

var rankTeams = function(votes) {
    const rank = {};
    const ranked = (vote) => {
        vote.split("").map((ele, index) => {
            if (!rank[ele]) rank[ele] = [0];
            rank[ele][index] = rank[ele][index] ? rank[ele][index] + 1 : 1;
        });
    };
    votes.map((vote) => ranked(vote));
    log(rank);

    const result = [];
    for (let [key, value] of Object.entries(rank)) {
        value.map((val, index) => {
            result[index] = key;
        });
    }
};

var rankTeams2 = function(votes) {
    const rank = {};
    const ranked = (vote) => {
        vote.split("").map((ele, index) => {
            rank[ele] = rank[ele] ? rank[ele] + index : index;
        });
    };
    votes.map((vote) => ranked(vote));
    return Object.keys(rank)
        .sort((a, b) => {
            if (rank[a] !== rank[b]) return rank[a] - rank[b];
            else return a > b ? 1 : -1;
        })
        .join("");
};
var rankTeams3 = function(votes) {
    const length = votes[0].length;
    const result = [];
    for (let i = 0; i < length; i++) {
        const rank = {};
        votes.map((vote) => {
            rank[vote[i]] = rank[vote[i]] ? rank[vote[i]] + 1 : 1;
        });
        result.push(rank);
    }
    log(result);
    result.map;
};

runTest(rankTeams3, testCase(data));
