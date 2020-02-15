import React, { useEffect } from 'react'

interface PropType {
    countryData: Array<{
        name: string,
        value: number
    }>
}

const Hospital = (props: PropType) => {
    let that: any = window;
    useEffect(() => {
        new that.Highcharts.Map('map', {
            title: {
                text: ''
            },
            colorAxis: {
                dataClasses: [{
                    color: '#FFEFD7',
                    from: 1,
                    name: '1-9人',
                    to: 9
                }, {
                    color: '#FFD2A0',
                    from: 10,
                    name: '10-99人',
                    to: 90
                }, {
                    color: '#FE8664',
                    from: 100,
                    name: '100-499人',
                    to: 499
                }, {
                    color: '#E64B47',
                    from: 500,
                    name: '500-999人',
                    to: 999
                }, {
                    color: '#C91014',
                    from: 1000,
                    name: '1000-9999人',
                    to: 9999
                }, {
                    color: '#9C0A0D',
                    from: 10000,
                    name: '10000人以上'
                }]
            },
            series: [{
                data: props.countryData,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                },
                name: '确诊',
                mapData: that.Highcharts.maps['cn/china'],
                joinBy: 'name' // 根据 name 属性进行关联
            }]
        });
    }, [props.countryData]);

    return <>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </>
}


export default Hospital