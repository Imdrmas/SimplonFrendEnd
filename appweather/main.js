new Vue({
  el: '#app',
  data: {
    hobbies: [{
        name: 'Running'
      },
      {
        name: 'Chess'
      },
      {
        name: 'Cooking'
      },
      {
        name: 'Hiking'
      }
    ],
    newHobby: '',
    deleted: false
  },
  methods: {
    addHobby: function() {
      this.hobbies.push({
        name: this.newHobby
      });
    },
    removeHobby: function(event) {
      let updatedHobbies = this.hobbies.filter((hobby) => {
        return hobby.name !== event.target.textContent.trim();
      });

      this.hobbies = updatedHobbies;

      if (!this.deleted) {
        this.deleted = true;
      }
    },
    setStyle: function() {
      if (this.hobbies.length < 3) {
        return 'pink';
      } else if (this.hobbies.length === 3) {
        return 'orange';
      } else {
        return 'cyan';
      }
    }
  }
});