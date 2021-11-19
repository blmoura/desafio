import { useState } from "react";
import { api } from "../api";

interface IInsightRequest {
  count: number
  data: IInsight[]
}

interface IInsight {
  id: string
  text: string
  tags?: ITags[]
}

interface ITags {
  id: string
  name: string
}

export default function useInsights(take: number) {
  const [insights, setInsights] = useState<IInsightRequest>()

  function getInsights(page = 0) {
    const virtualPage = ((page - 1) * take) <= 0
      ? 0
      : ((page - 1) * take)

    api.get(`/insights?skip=${virtualPage}&take=${take}`)
      .then(response => setInsights(response.data))
    }

    return {
      getInsights,
      insights
    }
}
