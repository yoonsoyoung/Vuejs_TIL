export default {
    template: `
    <div class="center">
    <hr />
      <h3>사원 정보</h3>
      <table>
        <thead>
          <tr>
            <th>사원 아이디</th>
            <th>사원명</th>
            <th>부서</th>
            <th>직책</th>
            <th>연봉</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{emps.id}}</td>
            <td>{{emps.name}}</td>
            <td>{{emps.deptName}}</td>
            <td>{{emps.title}}</td>
            <td>{{emps.salary*12}}</td>
          </tr>
        </tbody>
      </table>
      <a href="hrm_list.html" class="left">사원 목록</a>
    </div>
    `,

    data() {
        return {
            emps: {},
        };
    },
    // GET방식으로 값 받아옴
    created() {
        const id = new URL(document.location).searchParams.get("id");
        let emp = JSON.parse(localStorage.getItem("emps"));

        for (let i = 0; i < emp.length; i++) {
            if (emp[i].id == id) this.emps = emp[i];
        }
    }

};