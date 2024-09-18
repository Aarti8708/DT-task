const jsonData = {
    // paste the JSON data here
  };
  
  const titleElement = document.querySelector('title');
  const projectImageElement = document.querySelector('header img');
  const descriptionElement = document.querySelector('.description p');
  const learningOutcomesElement = document.querySelector('.learning-outcomes ul');
  const prerequisitesElement = document.querySelector('.prerequisites ul');
  const tasksElement = document.querySelector('.tasks');
  
  titleElement.textContent = jsonData.title;
  projectImageElement.src = jsonData.project_image;
  descriptionElement.innerHTML = jsonData.description;
  
  jsonData.learning_outcomes.forEach((outcome) => {
    const li = document.createElement('li');
    li.textContent = outcome;
    learningOutcomesElement.appendChild(li);
  });
  
  jsonData.pre_requisites.forEach((prerequisite) => {
    const li = document.createElement('li');
    li.textContent = prerequisite;
    prerequisitesElement.appendChild(li);
  });
  
  jsonData.tasks.forEach((task) => {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
      <h2>${task.task_title}</h2>
      <p>${task.task_description}</p>
    `;
    task.assets.forEach((asset) => {
        const assetElement = document.createElement('div');
        assetElement.className = 'asset';
        if (asset.asset_type === 'display_asset') {
          const iframe = document.createElement('iframe');
          iframe.src = asset.asset_content;
          iframe.frameBorder = 0;
          iframe.allowFullscreen = true;
          assetElement.appendChild(iframe);
        } else if (asset.asset_type === 'input_asset') {
          const textarea = document.createElement('textarea');
          textarea.placeholder = 'Enter your response';
          assetElement.appendChild(textarea);
        }
        taskElement.appendChild(assetElement);
      });
      tasksElement.appendChild(taskElement);
    });
    
    