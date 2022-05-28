import axios from "axios";


type DailyConsumption = {
    daily_consumption: number
}

type GetConsumptionReport = {
    data: DailyConsumption[]
}

async function getConsumption(){
    try {
        const {data, status} = await axios.get<GetConsumptionReport[]>(
            '<>',
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        );
        console.log(JSON.stringify(data));
        console.log('response status is: ', status);

        return data;
    }catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

getConsumption();

