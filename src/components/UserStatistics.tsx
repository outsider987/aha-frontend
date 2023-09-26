import { useEffect, useState } from 'react';
import useUserApi from '~/api/user';
import * as moment from 'moment-timezone';

const UserStatistics = () => {
  const [statistics, setStatistics] = useState({});
  const { GET_STATISTICS } = useUserApi();

  useEffect(() => {
    GET_STATISTICS().then((res) => {
      console.log(res.data);
      setStatistics(res.data);
    });
  }, []);

  return (
    <div>
      <h1>User Statistics </h1>
      <table>
        <thead>
          <tr>
            <th>Number of users </th>
            <th>Number of users with active sessions today.</th>
            <th>
              Average number of active session users in the last 7 days rolling.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" space-x-3">
            <td>{statistics.usersSignedUp}</td>
            <td>{statistics.usersTodayActive}</td>
            <td>{statistics.usersThisWeekActive}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserStatistics;
