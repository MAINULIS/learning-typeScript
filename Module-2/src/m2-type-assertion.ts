// * Type assertion(দাবী, বিবৃতি)

//* "as" syntax (try to avoid)

type Status = "pending" | "approve" |"rejected";

const internalStatus: string = "pending";

const showStatus = (status: Status) => {
    console.log(`Your application status is ${status}`);
}

showStatus(internalStatus as Status)

//* non-null assertion (try to avoid)

interface Config {
    port?: number;
}

const configValue: Config = {
    port: 484,
}

const currentPort: number = configValue.port!;
// const currentPort: number = configValue.port as number;

// * constant assertion (very useful)
const configuration = {
    port: 8080,
    prefix: "/api/v1"
} as const

// configuration.port = 9090; // can not re assign if i set as const