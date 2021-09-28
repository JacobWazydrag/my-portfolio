import React from 'react';
import * as d3 from 'd3';
import _ from 'underscore';
import moment from 'moment';
import HeatMapDate from 'react-d3-heatmap';
export default function HeatMap(props) {
    const { data } = props;
    let sample = [];
    data.forEach(element => {
        let dateExtractor = element.created_at.split('T');
        let date = dateExtractor[0];
        let indexOfItemThatExists = _.findIndex(sample, { date: date }); //either -1, or index
        let valueOfItemThatExists = indexOfItemThatExists === -1 ? undefined : sample[indexOfItemThatExists].count;
        let initialSampleObjectToPush = {};
        //first time
        if (sample.length === 0) {
            initialSampleObjectToPush.date = date;
            initialSampleObjectToPush.count = 1;
            sample.push(initialSampleObjectToPush);
        } else {
            //now we have items
            //check to see if date exists
            //if date exists it will at lease have count 1
            if (indexOfItemThatExists !== -1) {
                var newSample = sample[indexOfItemThatExists];
                newSample.count += 1;
                sample[indexOfItemThatExists] = newSample;
                //does not exist have to push the initial object into sample
            } else {
                initialSampleObjectToPush.date = date;
                initialSampleObjectToPush.count = 1;
                sample.push(initialSampleObjectToPush);
            }
        }
    });
    //Testing
    sample.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    let newSample = JSON.parse(JSON.stringify(sample));
    let justTheDates = [];
    newSample.map((a, b) => {
        delete a.count;
        justTheDates.push(a.date);
    });

    const range = {
        end: '2021-12-31',
        start: '2020-11-02',
        existing: justTheDates,

        complete: function() {
            let currentDate = this.toMoment(this.start);
            const complete = [];
            while (currentDate <= this.toMoment(this.end)) {
                complete.push(this.generateDate(this.momentToString(currentDate)));
                currentDate = currentDate.add(1, 'day');
            }
            return complete;
        },

        generateDate(date) {
            const obj = { date: date };
            const index = _.indexOf(this.existing, date);
            if (Number.isInteger(index)) {
                obj.oldIndex = index;
            }
            return obj;
        },

        toMoment(stringDate) {
            return moment(stringDate, this.format());
        },

        momentToString(momentObj) {
            return momentObj.format(this.format());
        },
        format() {
            return 'YYYY-MM-DD';
        },
        search(arr, find, start, end) {
            if (start > end) return false;
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === find) return mid;

            if (arr[mid] > find) return this.search(arr, find, start, mid - 1);
            else return this.search(arr, find, mid + 1, end);
        }
    };

    //Testing

    const dateValues = sample.map(dv => ({
        date: d3.timeDay(new Date(dv.date)),
        count: Number(dv.count)
    }));

    let fullPicture = range.complete();
    _.each(fullPicture, (a, b) => {
        if (a.oldIndex === -1) {
            a.count = 0;
            a.date = d3.timeDay(new Date(a.date));
            delete a.oldIndex;
        } else {
            a.count = dateValues[a.oldIndex].count;
            a.date = d3.timeDay(new Date(a.date));
            delete a.oldIndex;
        }
    });

    return (
        <div>
            <HeatMapDate
                startDate={fullPicture[0].date}
                endDate={_.last(fullPicture).date}
                data={fullPicture}
                colors={[
                    {
                        count: 1,
                        color: '#fcb045'
                    },
                    {
                        count: 4,
                        color: '#fc933d'
                    },
                    {
                        count: 5,
                        color: '#fc7b37'
                    },
                    {
                        count: 8,
                        color: '#fc6631'
                    },
                    {
                        count: 9,
                        color: '#fd4c2a'
                    },
                    {
                        count: 12,
                        color: '#fd3223'
                    },
                    {
                        count: 13,
                        color: '#fd1d1d'
                    },
                    {
                        count: 16,
                        color: '#db2547'
                    },
                    {
                        count: 17,
                        color: '#c32b65'
                    },
                    {
                        count: 20,
                        color: '#af307d'
                    },
                    {
                        count: 21,
                        color: '#833ab4'
                    }
                ]}
                displayLegend
                displayYear={true}
                monthSpace={20}
                marginRight={10}
                defaultColor={'#D3D3D3'}
                rectWidth={15}
                radius={5}
            />
        </div>
    );
}
