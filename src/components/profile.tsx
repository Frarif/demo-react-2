export function Profile() {
  return (
    <div>
      <div className="profile">
        <img
          src="src/images/arif-setiawan.jpg"
          alt="arif setiawan"
          height={200}
          width={140}
        />
        <table>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>Arif Setiawan</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>freakinarif25@gmail.com</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>Sumatera Utara, Medan</td>
          </tr>
          <tr>
            <td>Hobi</td>
            <td>:</td>
            <td>Gaming, Playing, & Workout</td>
          </tr>
        </table>
        <button>
          <a
            href="https://drive.google.com/file/d/1Ntuaw105SmAlV_AxuX3tV_7IWMMhIS1E/view?usp=sharing"
            target={"_blank"}
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}
