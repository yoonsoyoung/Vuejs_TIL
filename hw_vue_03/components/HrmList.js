export default {
    template: `
    <div class="center">
      <hr />
      <h3>사원 목록</h3>
      <div class="search">
        <form action="" class="searchForm">
          <div>
            <input type="text" v-model="searchName" />
            <button type="button">검색</button>
            <button type="button" onclick="location.href='hrm_regist.html'">등록</button>
          </div>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th id="empId">사원 아이디</th>
              <th>사원명</th>
              <th>부서</th>
              <th>직책</th>
              <th>연봉</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in emps" v-if="item.name.includes(searchName)">
              <td><a :href="'hrm_detail.html?id='+item.id">{{item.id}}</a></td>
              <td>{{item.name}}</td>
              <td>{{item.deptName}}</td>
              <td>{{item.title}}</td>
              <td>{{item.salary*12}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `,

    data() {
        return {
          emps: {},
          searchName: "",
        };
    },
    created() {
        let emp = localStorage.getItem("emps");
        if (emp !== null || emp.length != 0) {
          this.emps = JSON.parse(emp);
        }
    },
    

}