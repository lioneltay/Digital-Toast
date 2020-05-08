import * as functions from "firebase-functions"
import axios from "axios"

export const dummyFunction = functions.https.onCall(
  async (data: CallableFunction.SendFeedbackData, context) => {
    console.log("Called the dummy function")
    return Promise.resolve("nothing here")
  },
)
