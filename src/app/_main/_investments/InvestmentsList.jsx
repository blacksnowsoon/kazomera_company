import "./investStyles.css";
import React from 'react';
import ArticleInvestments from './Investment';
import { useGetInvestmentsQuery } from "features/rtkAPI/apiSlice";

export default function InvestmentsList() {
  const { data: investments = [], isLoading, isSuccess, error, isError } = useGetInvestmentsQuery();
  console.log(investments)
  return (
    <div className='articles-invest container'>
      {
        ["اسم الاستثمار", "اسم الاستثمار", 'اسم الاستثمار'].map((e, i) => (
          <ArticleInvestments heading={e} />
        ))
      }
    </div>
  )
}
