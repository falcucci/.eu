import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  ElixirLogo,
  AppleIcon,
  SafariLogo,
  VimLogo,
  FirefoxLogo,
  ChromeLogo,
  KubernatesLogo,
  DockerLogo,
  KibanaLogo,
  PrometheusLogo,
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
        color="#fff"
        icon={<VimLogo />}
        name="Text Editor"
        type="Screen-based Text Editor "
        useCase={"I do almost everything in the terminal, Vim helps my daily productivity so much."}
      />

      <Technology
        color="#000"
        icon={<AppleIcon />}
        name="OS"
        type="Unix Operating System"
        useCase={"I strongly use the consistent apple ecosystem."}
      />

      <Technology
        color="#fff"
        icon={<AwsLogo />}
        name="AWS"
        type="Cloud Platform"
        useCase={
          'AWS Lambdas as much as possible and mainly SQS/SNS to send, store and receive messages between different applications and services.'
        }
      />

      <Technology
        color="#000"
        icon={<VercelLogo />}
        name="Vercel"
        type="Web hosting"
        useCase={
          'Every personal project goes here, since lambda functions til complex web applications.'
        }
      />

      <Technology
        color="#fff"
        icon={<NextJsLogo />}
        name="Next.js"
        type="React Framework "
        useCase={
          'Gives me the power to quickly develop and deploy web applications that are modern, fast and secure.'
        }
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
        color="#fff"
        icon={<KibanaLogo />}
        name="Kibana"
        type="ElasticSearch data visualization"
        useCase={'Using to visualize Elasticsearch data and navigate the Elastic Stack.'}
      />

      <Technology
        color="#000"
        icon={<PythonLogo />}
        name="Python"
        type="Backend, System"
        useCase={
          'Everything which envolves image processing, scraping, data analysis, data manipulation and visualization is my number one of choice.'
        }
      />

      <Technology
        color="#fff"
        icon={<ElasticSearch />}
        name="ElasticSearch"
        type="Search Engine"
        useCase={
          'Most used to retrieve common informations in a fast and scalable way such as catalogs.'
        }
      />

      <Technology
        color="#000"
        icon={<GolangLogo />}
        name="Golang"
        type="Backend, System"
        useCase={`Building fault-tolerant realtime systems that scale out across multiple nodes.`}
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
        icon={<PostgreSQL />}
        name="PostgreSQL"
        type="Relational Database "
        useCase={'Why? Stability, feature set, very large database size at high speeds.'}
      />

      <Technology
        color="#fff"
        icon={<PrometheusLogo />}
        name="Prometheus"
        type="Monitoring system & time series database"
        useCase={'God damn good using it with grafana.'}
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
        icon={<DockerLogo />}
        name="Docker"
        type="Containerized Application Development"
        useCase={
          'Provide a runtime environment and deploy applications by packaging them in lightweight containers. '
        }
      />

      <Technology
        color="#000"
        icon={<GcpLogo />}
        name="GCP"
        type="Cloud Platform"
        useCase={
          'Excellent IaaS solution, easy to use and provides a wide selection of assets including network infrastructure and virtual networking.'
        }
      />

      <Technology
        color="#fff"
        icon={<KubernatesLogo />}
        name="Kubernates"
        type="Automation software deployment"
        useCase={'Scale and run my containerized applications.'}
      />

      <Technology
        color="#000"
        icon={<FirefoxLogo />}
        name="Firefox Extensions"
        type="Browser"
        useCase={
          'Ive been creating browser extensions for a few years so everytime a new tech hype comes up new ideas bloom.'
        }
      />

      <Technology
        color="#fff"
        icon={<RabbitMQLogo />}
        name="RabbitMQ"
        type="Message queue"
        useCase={'Messaging between different services in a robust & durable way'}
      />

      <Technology
        color="#000"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />

      <Technology
        color="#fff"
        icon={<HasuraLogo />}
        name="Hasura"
        type="GraphQL Engine, Backend"
        useCase={
          'I lovely use Hasura to create quickly data-driven applications and fetch data from multiple sources with all security and flexibility benefits.'
        }
      />

      <Technology
        color="#000"
        icon={<GraphqlLogo />}
        name="GraphQL"
        type="Query Runtime Engine"
        useCase={
          'I love REST API but GraphQL is in another level of flexibility and performance if you know what are you doing.'
        }
      />

      <Technology
        color="#fff"
        icon={<RedisSQL />}
        name="Redis"
        type="In-memory Data Structure Store"
        useCase={"The best memcached database I have ever used so far. And it's blazingly fast."}
      />

    </PageWrapper>
  );
};

export default How;
