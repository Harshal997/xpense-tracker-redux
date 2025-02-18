import React, { useEffect, useState } from "react";
import "./landingPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetTracker, updateTracker } from "../../redux/slices/userSlice";

const LandingPage = () => {
  const data = useSelector((state) => state.user);
  const [name, setName] = useState(data.name || "");
  const [budget, setBudget] = useState(data.budget || 0);
  const [categories, setCategories] = useState({
    food: data.categories.food || 0,
    travel: data.categories.travel || 0,
    entertainment: data.categories.entertainment || 0,
    others: data.categories.others || 0,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("test", data);

  const resetUserState = () => {
    prompt("This will delete all previous transactions.")
    dispatch(resetTracker());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { food, travel, entertainment, others } = categories;
    if (budget <= 0) {
      alert("The total budget must be > 0.");
      return;
    }
    if (budget < food + travel + entertainment) {
      alert("Total Categorical budget should not exceed monthly budget");
      return;
    } else {
      setCategories({
        ...categories,
        others: budget - (food + travel + entertainment),
      });
    }

    dispatch(updateTracker({ name, budget, categories }));
    navigate("/tracker");
  };
  useEffect(() => {
    setName(data.name || "");
    setBudget(data.budget || 0);
    setCategories({
      food: data.categories.food || 0,
      travel: data.categories.travel || 0,
      entertainment: data.categories.entertainment || 0,
      others: data.categories.others || 0,
    });
  }, [data]);
  return (
    <div>
      <div className="landing-page-container">
        <form action="" onSubmit={handleSubmit} name="landing-page-form">
          <input
            required
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <hr />
          <input
            required
            type="number"
            placeholder="Enter your monthly budget"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <p>Fill your monthly categorical budget:</p>
          <div className="category-container">
            <div className="category">
              <h6>Food</h6>
              <input
                required
                type="number"
                id="food"
                value={categories.food}
                onChange={(e) =>
                  setCategories({
                    ...categories,
                    food:
                      Number(e.target.value) < 0 ? 0 : Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="category">
              <h6>Travel</h6>
              <input
                required
                type="number"
                id="travel"
                value={categories.travel}
                onChange={(e) =>
                  setCategories({
                    ...categories,
                    travel:
                      Number(e.target.value) < 0 ? 0 : Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="category">
              <h6>Entertainment</h6>
              <input
                required
                type="number"
                id="entertainment"
                value={categories.entertainment}
                onChange={(e) =>
                  setCategories({
                    ...categories,
                    entertainment:
                      Number(e.target.value) < 0 ? 0 : Number(e.target.value),
                  })
                }
              />
            </div>
            {!data.budget ? (
              <button type="submit">Submit</button>
            ) : (
              <div>
                <button type="submit" onClick={handleSubmit}>
                  Update budget
                </button>
                <button type="submit" onClick={() => dispatch(resetTracker())}>
                  Start new tracker
                </button>
                <button type="submit" onClick={() => navigate("/tracker")}>
                  go back
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
      {data.budget > 0 && (
        <div>
          <button type="submit" onClick={handleSubmit}>
            Update budget
          </button>
          <button onClick={resetUserState}>
            Start new tracker
          </button>
          <button onClick={() => navigate("/tracker")}>
            go back
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
