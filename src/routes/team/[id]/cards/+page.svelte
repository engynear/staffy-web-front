<script>
    let isActive = false;
  
    function toggleActive() {
      isActive = !isActive;
      console.log(`Thank You Cards активность: ${isActive ? 'включена' : 'выключена'}`);
      // Здесь можно добавить дополнительные действия, например, отправку состояния на сервер
    }
  </script>
  
  <style>
    .thank-you-page {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 2rem auto;
      padding: 1rem;
      border-radius: 8px;
      background-color: #f4f7fa;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-family: 'Montserrat', sans-serif;
    }
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .header h1 {
      font-weight: 700;
    }
  
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;
    }
  
    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
      border-radius: 12px;
    }
  
    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  
    input:checked + .slider {
      background-color: #0070f3;
    }
  
    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
  
  <div class="thank-you-page">
    <div class="header">
      <h1>Thank You Cards</h1>
      <label class="toggle-switch">
        <input type="checkbox" bind:checked={isActive} on:change={toggleActive}>
        <span class="slider"></span>
      </label>
    </div>
  </div>
  