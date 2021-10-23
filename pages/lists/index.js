import Head from "next/head";
import styles from "../../styles/Lists.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};

const Lists = ({ users }) => {
  return (
    <>
      <Head>
        <title>List | List </title>
      </Head>
      <div>
        <h1>Lists of Users</h1>
        {users.map((user) => (
          <Link href={"/lists/" + user.id} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Lists;
