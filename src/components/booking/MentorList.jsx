import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mentor } from '../../redux/actions/MentorActions';

const MentorList = () => {
  const dispatch = useDispatch();
  const mentordata = useSelector((state) => state.mentor);
  const { mentors } = mentordata;

  if (!mentors) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <h2>List of Available Mentors</h2>
      <section className="row">
        {mentors.map((item) => {
          const {
            name, picture, bio, email, id,
          } = item.mentor;
          return (
            <div className="item-list" key={id}>
              <div className="mentor-img">
                <img src={picture} alt="mentor" />
              </div>
              <div className="mentor-info">
                <h3>{name}</h3>
                <p>{bio}</p>
                <p>{email}</p>
                <Link to={`/booking/${id}`}>
                  <button type="button" onClick={() => dispatch(mentor(id))}>
                    Reserve
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MentorList;
