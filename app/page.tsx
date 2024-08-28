import Home from "@/components/layout/home";

interface Props {
  searchParams: {
    to: string;
  };
}

export default function HomePage({ searchParams }: Props) {
  const { to } = searchParams;

  return <Home to={to} />;
}
