import userListStyles from "./UserList.module.css";

export const TableHead = () => {
  return (
    <thead className={userListStyles.user_list_thead}>
      <tr>
        <th className={userListStyles.user_list_thead_th}>Name</th>
        <th className={userListStyles.user_list_thead_th}>Email</th>
        <th className={userListStyles.user_list_thead_th}>Address</th>
        <th className={userListStyles.user_list_thead_th}>Phone</th>
        <th className={userListStyles.user_list_thead_th}>Website</th>
        <th className={userListStyles.user_list_thead_th}></th>
      </tr>
    </thead>
  );
};
