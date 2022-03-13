import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['Price', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    },
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => {
                return {
                  x: price.time_close,
                  y: [
                    price.open.toFixed(2),
                    price.high.toFixed(2),
                    price.low.toFixed(2),
                    price.close.toFixed(2),
                  ],
                };
              }),
            },
          ]}
          options={{
            chart: {
              height: 300,
              width: 500,
              background: 'transparent',
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              type: 'datetime',
              axisBorder: { show: true },
              axisTicks: { show: true },
              labels: { show: true },
            },
            yaxis: {
              show: true,
              tooltip: {
                enabled: true,
              },
            },
          }}
        ></ApexChart>
      )}
    </div>
  );
}

export default Price;
