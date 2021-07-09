
export default function Form({ setModalAdd, persons, setPersons, newID, setNewID, editMode, editId, setEditMode, newPerson, setNewPerson}) {

    function changeName(e) {
      let input = e.target.value;
      newPerson.name = input
      setNewPerson({...newPerson});
    }
  
    function changeYear(e) {
      let input = e.target.value;
      newPerson.yearOfBirth = input
      setNewPerson({...newPerson});
    }
  
    function changeEmail(e) {
      let input = e.target.value;
      newPerson.email = input
      setNewPerson({...newPerson});
    }
  
    function changePhone(e) {
      let input = e.target.value;
      newPerson.phone = input
      setNewPerson({...newPerson});
    }
  
    function addNew() {
      setModalAdd(false);
      newPerson.id = newID
      setNewPerson({...newPerson});
      setPersons([newPerson, ...persons]);
      setNewID(newID + 1);
    }
  
    function edit() {
      setModalAdd(false);
      newPerson.id = newID
      setNewPerson({...newPerson});
      setPersons(persons.map((person)=>{
        if (person.id === editId) {
          person = newPerson
        }
        return person
      }));
      setNewID(newID + 1);
      setEditMode(false);
      setNewPerson({});
    }
  
    function back () {
      setNewPerson({});
      setModalAdd(false)
    }
  
  
    const Render = (
      <form method="get" className="form-add">
        <div className="row-custom">
          <label htmlFor="name">
            Họ tên <span className="require">*</span>
          </label>
          <input type="text" id="name" value={newPerson.name} required onChange={(e) => changeName(e)} />
        </div>
        <div className="row-custom">
          <label htmlFor="year">Năm sinh</label>
          <input type="text" id="year" value={newPerson.yearOfBirth} onChange={(e) => changeYear(e)} />
        </div>
        <div className="row-custom">
          <label htmlFor="email">
            Email <span className="require">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={newPerson.email}
            onChange={(e) => changeEmail(e)}
          />
        </div>
        <div className="row-custom">
          <label htmlFor="phone">
            Phone <span className="require">*</span>
          </label>
          <input
            type="text"
            id="phone"
            required
            value={newPerson.phone}
            onChange={(e) => changePhone(e)}
          />
        </div>
        <div className="btn-row">
          <button
            className="btn back-btn"
            type="button"
            onClick={back}
          >
            <i className="fas fa-chevron-left" /> Quay lại
          </button>
          <button
            className="btn save-btn"
            type="button"
            onClick={editMode ? edit : addNew}
          >
            <i className="fas fa-save" /> Lưu
          </button>
        </div>
      </form>
    );
  
    return (
      <div className="modal-container">
        {editMode ? <h1>Sửa thông tin học viên</h1> : <h1>Thêm mới học viên</h1>}
        {Render}
      </div>
    );
  }
  