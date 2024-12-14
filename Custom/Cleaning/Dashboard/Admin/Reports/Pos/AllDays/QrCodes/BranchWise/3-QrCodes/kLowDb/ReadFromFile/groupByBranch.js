let StartFunc = ({ inDataAsArray }) => {
    const grouped = inDataAsArray.reduce((result, item) => {
        const key = item.BranchName;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});

    let LocalReturnArray = [];

    for (const [key, value] of Object.entries(grouped)) {
        LocalReturnArray.push({
            BranchName: key,
            QrCount: value.length
        });
    }

    LocalReturnArray.sort((b,a) => b.QrCount - a.QrCount);

    return LocalReturnArray;
};

export { StartFunc };