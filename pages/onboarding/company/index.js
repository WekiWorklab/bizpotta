import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import CompanyOnboard from '../../../components/CompanyOnboard';
import { FullPageSpinner } from '../../../components/Lib';

const Index = ({data}) => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);
    const { user } = useSelector((state) => state.auth);
  
    React.useEffect(() => {
      if (!user) {
        router.push("/auth/login");
      }
      setLoading(false);
    }, [router, user]);
  
    if (loading) return <FullPageSpinner />;
  
    return <CompanyOnboard data={data} />;
}

export default Index


export async function getStaticProps() {
    const base = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
    const res = await fetch(`${base}/onboardData`);
    const result = await res.json();
    const { data } = result;
    return {
      props: {
        data,
      },
    };
  }