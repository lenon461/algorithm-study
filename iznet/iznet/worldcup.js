const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [
        [
            [
                [5, 0, 0],
                [3, 0, 2],
                [2, 0, 3],
                [0, 0, 5],
                [4, 0, 1],
                [1, 0, 4],
            ],
        ],
        true,
    ],
    [
        [
            [
                [4, 1, 0],
                [3, 0, 2],
                [4, 1, 0],
                [1, 1, 3],
                [0, 0, 5],
                [1, 1, 3],
            ],
        ],
        true,
    ],
    [
        [
            [
                [5, 0, 0],
                [4, 0, 1],
                [2, 2, 1],
                [2, 0, 3],
                [1, 0, 4],
                [0, 0, 5],
            ],
        ],
        false,
    ],
    [
        [
            [
                [5, 0, 0],
                [3, 1, 1],
                [2, 1, 2],
                [2, 0, 3],
                [0, 0, 5],
                [1, 0, 4],
            ],
        ],
        false,
    ],
    [
        [
            [
                [4, 0, 1],
                [4, 1, 0],
                [2, 1, 2],
                [1, 0, 4],
                [1, 0, 4],
                [1, 0, 4],
            ],
        ],
        true,
    ],
];
const EmptyRecordTable = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const worldcup = (arg) => {
    const madePossibleRecords = () => {
        const PossibleRecords = [];
        const MatchSchedule = [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4],
            [1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5, 4, 5, 5],
        ];
        const MatchEndDay = 15;

        const MatchRecording = (MatchDay, MatchRecord) => {
            if (MatchDay == MatchEndDay) {
                PossibleRecords.push(MatchRecord);
            } else {
                const CurMatchRecord = MatchRecordDeepCopy(MatchRecord);
                const HomeTeam = MatchSchedule[0][MatchDay];
                const AwayTeam = MatchSchedule[1][MatchDay];

                const MatchRecordCase1 = MatchRecordDeepCopy(CurMatchRecord);
                //Case1: Home Win
                MatchRecordCase1[HomeTeam][0]++;
                MatchRecordCase1[AwayTeam][2]++;
                MatchRecording(MatchDay + 1, MatchRecordCase1);

                const MatchRecordCase2 = MatchRecordDeepCopy(CurMatchRecord);
                //Case2: Draw
                MatchRecordCase2[HomeTeam][1]++;
                MatchRecordCase2[AwayTeam][1]++;
                MatchRecording(MatchDay + 1, MatchRecordCase2);

                const MatchRecordCase3 = MatchRecordDeepCopy(CurMatchRecord);
                //Case3: Away Win
                MatchRecordCase3[HomeTeam][2]++;
                MatchRecordCase3[AwayTeam][0]++;
                MatchRecording(MatchDay + 1, MatchRecordCase3);
            }
        };

        const MatchRecordDeepCopy = (MatchRecord) => {
            return MatchRecord.map((team) => [...team]);
        };

        MatchRecording(0, EmptyRecordTable);

        return PossibleRecords;
    };
    const PossibleRecords = madePossibleRecords();
    return PossibleRecords.some((Record) => {
        return JSON.stringify(Record) === JSON.stringify(arg);
    });
};

runTest(worldcup, testCase(data));

const used = process.memoryUsage();
for (let key in used) {
    console.log(`Memory: ${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
}
