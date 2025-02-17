import { Helmet } from "react-helmet-async";

const JsonLd = ({ schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default JsonLd;
