import "./addUser.css";

const AddUser = () => {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>

      {/* If you find a user show t here */}
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Sarah Adu</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
