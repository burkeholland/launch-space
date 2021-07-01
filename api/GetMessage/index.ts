import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const message = "hello launch space";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { message: message}
    };

};

export default httpTrigger;