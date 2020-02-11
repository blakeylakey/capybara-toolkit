export var configData = (labelArray, dataArray) => ({
    labels: labelArray,
    title: {
        text: "Date Time Formatting"
    },
    datasets: [{
        label: 'Popularity',
        data: dataArray,
        tension: 0.3,
        borderColor: "rgb(76,26,135)",
        backgroundColor: "rgb(0,0,0,0)",
        radius: 0,
        borderWidth: 2,
        pointHitRadius: 10,
        pointRadius: 3,
        pointBackgroundColor: "rgb(76,26,135)",
        pointHoverRadius: 6,
    }]
});

export var configOptions = {
    title: {text: "This is a test"},
    scales: {
        xAxes: [{
            title: "time",
            type: 'time',
            gridLines: {
                display: false
            },
            time: {
                unit: "month",
                unitStepSize: 1,
                displayFormats: {
                    millisecond: 'MMM DD',
                    second: 'MMM DD',
                    minute: 'MMM DD',
                    hour: 'MMM DD',
                    day: 'MMM DD',
                    week: 'MMM DD',
                    month: 'MMM',
                    quarter: 'MMM DD',
                    year: 'MMM DD',
                }
            }
        }]
    },
    legend: {
        display: false
    },
    layout: {
        padding: {
            top: 5,
            bottom: 0,
            left: 8,
            right: 8
        }
    }
}