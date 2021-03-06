export default {
    template: `
    <div>
        <div class="header">
        <hr />
        <h3 class="titleLogo">SSAFY HRM ADD EMPLOEE</h3>
    </div>
    <div class="content">
        <form action="" id="registForm" method="POST">
        <table id="info">
            <tr>
            <td class="tdName">사원아이디</td>
            <td>
                <input type="text" name="id" v-model="emps.id" required />
            </td>
            </tr>
            <tr>
            <td class="tdName">이름</td>
            <td>
                <input type="text" name="name" v-model="emps.name" required />
            </td>
            </tr>
            <tr>
            <td class="tdName">이메일</td>
            <td>
                <input type="email" name="email" v-model="emps.email" required />
            </td>
            </tr>
            <tr>
            <td class="tdName">고용일</td>
            <td>
                <input type="date" name="hiredate" v-model="emps.hiredate" required />
            </td>
            </tr>
            <tr>
            <td class="tdName">관리자</td>
            <td>
                <select v-model="emps.mgr" required>
                <option v-for="mgr in mgrs" v-bind:value="mgr.value">{{mgr.text}}</option>
                </select>
            </td>
            </tr>
            <tr>
            <td class="tdName">직책</td>
            <td>
                <select v-model="emps.title" required>
                <option v-for="option in options" v-bind:value="option.value">
                    {{option.text}}
                </option>
                </select>
            </td>
            </tr>

            <tr>
            <td class="tdName">부서</td>
            <td>
                <select v-model="emps.deptName" required>
                <option v-for="dept in depts" v-bind:value="dept.value">{{dept.text}}</option>
                </select>
            </td>
            </tr>
            <tr>
            <td class="tdName">월급</td>
            <td>
                <input type="text" name="salary" v-model="emps.salary" required />
            </td>
            </tr>
            <tr>
            <td class="tdName">커미션</td>
            <td>
                <input type="text" name="commi" v-model="emps.commi" />
            </td>
            </tr>
        </table>
        <button type="button" @click="regist()">사원추가</button>
        <button type="button" @click="mvlist()">목록</button>
        </form>
    </div>
  </div>
    `,
    data() {
        return {
          emps: {},

          options: [
            { text: "사장", value: "사장" },
            { text: "기획부장", value: "기획부장" },
            { text: "영업부장", value: "영업부장" },
            { text: "총무부장", value: "총무부장" },
            { text: "인사부장", value: "인사부장" },
            { text: "과장", value: "과장" },
            { text: "영업대표이사", value: "영업대표이사" },
            { text: "사원", value: "사원" },
          ],
          mgrs: [
            { text: "장길산", value: "장길산" },
            { text: "박구곤", value: "박구곤" },
            { text: "정부장", value: "정부장" },
          ],
          depts: [
            { text: "인사부", value: "인사부" },
            { text: "기획부", value: "기획부" },
            { text: "영업부", value: "영업부" },
            { text: "회계부", value: "회계부" },
          ],
        };
      },
      methods: {
        mvlist() {
          location.href = "hrm_list.html";
        },
        regist() {
          let emp = JSON.parse(localStorage.getItem("emps"));
          if (emp == null || emp.length == 0) {
            emp = [];
          }
          emp.push(this.emps);
          localStorage.setItem("emps", JSON.stringify(emp));

          alert("등록 완료!");
          location.href = "hrm_list.html";
        },
      },
}