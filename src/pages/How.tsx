import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  ElixirLogo,
 ElasticSearch,
 RedisSQL,
 PostgreSQL,
  GraphqlLogo,
  GcpLogo,
  HasuraLogo,
  RabbitMQLogo,
  NextJsLogo,
  NodeJsLogo,
  GolangLogo,
  VercelLogo,
  PythonLogo,
  ReactLogo,
  RustLogo,
  AwsLogo,
  SolidityLogo,
  TypescriptLogo,
} from '../components/Icons';
import { Helmet } from 'react-helmet';

const How = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>How</title>
      </Helmet>
      <h1>How I Do It</h1>
      <p>
        I highly leverage new bleeding-edge technologies and languages like Rust, Python, Nodejs and
        Golang to stay on top of the game. You can find a list of my most-used technologies below.
      </p>

      <Technology
        color="#000"
        icon={<VercelLogo />}
        name="Vercel"
        type="Message queue"
        useCase={'Everything about personal projects also runs here as the main deployment cloud service, since lambda function til complex web applications.'}
      />

      <Technology
        color="#fff"
        icon={<NextJsLogo />}
        name="NextJs"
        type="Message queue"
        useCase={'Gives me the power to quickly develop and deploy web applications that are modern, fast and secure.'}
      />

      <Technology
        color="#000"
        icon={<RustLogo />}
        name="Rust"
        type="Backend, System"
        useCase={
          'Optimizing parts of Python and Nodejs code using Rust bindings, writing native efficient system code.'
        }
      />

      <Technology
        color="#000"
        icon={<PythonLogo />}
        name="Python"
        type="Backend, Backend"
        useCase={'Everything which envolves image processing, scraping, data analysis, data manipulation and visualization is my number one of choice.'}
      />

      <Technology
        color="#000"
        icon={<GolangLogo />}
        name="Golang"
        type="Backend, System"
        useCase={
          `Golang was an eye-opening experience since now a days.`
        }
      />

      <Technology
        color="#000"
        icon={<NodeJsLogo />}
        name="Javascript"
        type="Realtime, Backend"
        useCase={`A indispensable tool in my toolbox which I get constantly impressed by its power and flexibility.`}
      />

      <Technology
        color="#fff"
        icon={<AwsLogo />}
        name="AWS"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />

      <Technology
        color="#000"
        icon={<GcpLogo />}
        name="GCP"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />

      <Technology
        color="#000"
        icon={<HasuraLogo />}
        name="Hasura"
        type="Realtime, Backend"
        useCase={'Building fault-tolerant realtime systems that scale out across multiple nodes'}
      />

      <Technology
        color="#fff"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JS Framework"
        useCase={'Types for JS - will save your life when projects expand'}
      />

      <Technology
        color="#000"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />
 


      <Technology
        color="#FF6600"
        icon={<RabbitMQLogo />}
        name="RabbitMQ"
        type="Message queue"
        useCase={'Messaging between different services in a robust & durable way'}
      />

      <Technology
        color="#000"
        icon={<GraphqlLogo />}
        name="GraphQL"
        type="Message queue"
        useCase={'Messaging between different services in a robust & durable way'}
      />

      <Technology
        color="#000"
        icon={<PostgreSQL />}
        name="PostgreSQL"
        type="Message queue"
        useCase={'Messaging between different services in a robust & durable way'}
      />

      <Technology
        color="#000"
        icon={<RedisSQL />}
        name="Redis"
        type="Message queue"
        useCase={'Messaging between different services in a robust & durable way'}
      />
 
      <Technology
        color="#fff"
        icon={<ElasticSearch />}
        name="ElasticSearch"
        type="Search Engine"
        useCase={'Most used to retrieve common informations in a fast and scalable way such as catalogs.'}
      />
 
      <Technology
        color="#9c1fa5"
        icon={<ElixirLogo />}
        name="Elixir"
        type="Realtime, Backend"
        useCase={'Building fault-tolerant realtime systems that scale out across multiple nodes'}
      />
    </PageWrapper>
  );
};

export default How;
