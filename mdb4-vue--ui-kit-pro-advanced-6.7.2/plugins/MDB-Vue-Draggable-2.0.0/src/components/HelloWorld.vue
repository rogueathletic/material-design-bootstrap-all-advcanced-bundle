<template>
  <div class="page-container">
    <h1>MDB Vue Draggable</h1>
    <section class="example-section">
      <h2>Basic example</h2>
      <p>Drag elements freely inside the container</p>
      <div class="drag-container">
        <div
          v-mdb-draggable
          :style="{ top: '130px' }"
          class="dragged-element grey"
        >
          <p>Drag me!</p>
        </div>
        <div v-mdb-draggable class="dragged-element blue">
          <p>Drag me!</p>
        </div>
        <div
          v-mdb-draggable
          :style="{ top: '260px' }"
          class="dragged-element red"
        >
          <p>Drag me!</p>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Only selected axis</h2>
      <p>Drag elements along the corresponding axis.</p>
      <div class="drag-container">
        <div
          v-mdb-draggable.x
          :style="{ top: '200px', left: 'calc(100% - 120px)' }"
          class="dragged-element grey"
        >
          <p>X</p>
        </div>
        <div v-mdb-draggable.y class="dragged-element green">
          <p>Y</p>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Handles</h2>
      <p>Use the green circle to drag the entire element.</p>
      <div class="drag-container">
        <div
          v-mdb-draggable="{ handle: 'drag-handle' }"
          :style="{ top: '100px', left: '10px' }"
          class="dragged-element grey"
        >
          <div
            id="drag-handle"
            :style="{ borderRadius: '50%', width: '40%', height: '40%' }"
            class="green"
          ></div>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Events</h2>
      <div class="drag-container">
        <div
          v-mdb-draggable="{
            start: handleStart,
            drag: handleDrag,
            end: handleEnd
          }"
          class="dragged-element green"
        >
          <ul>
            <li>@start: {{ count.start }}</li>
            <li>@drag: {{ count.drag }}</li>
            <li>@end: {{ count.end }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Snap to the container (inner mode)</h2>
      <div class="drag-container">
        <div
          v-mdb-draggable="{ snap: { tolerance: 80, mode: 'inner' } }"
          class="dragged-element green"
        ></div>
      </div>
    </section>

    <section class="example-section">
      <h2>Snap to other elements (outer mode)</h2>
      <div class="drag-container">
        <div
          id="el-1"
          v-mdb-draggable="{
            snap: { referenceId: 'el-2', tolerance: 30, mode: 'outer' }
          }"
          class="dragged-element green"
        ></div>
        <div
          id="el-2"
          v-mdb-draggable="{
            snap: {
              referenceId: 'el-1',
              tolerance: 30,
              mode: 'outer'
            }
          }"
          class="dragged-element purple"
          :style="{ top: '250px' }"
        ></div>
      </div>
    </section>

    <section class="example-section">
      <h2>Revert</h2>
      <div class="drag-container">
        <div v-mdb-draggable.revert class="dragged-element purple">
          <p>Element will return to its initial position</p>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Offset</h2>
      <div class="drag-container">
        <div
          v-mdb-draggable="{
            offset: { top: 10, bottom: 30, left: 10, right: 60 }
          }"
          :style="{ left: 'calc(50% - 60px', top: '10px' }"
          class="dragged-element teal"
        >
          <p>Try moving the element towards the container's edges</p>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Customize cursor</h2>
      <div class="drag-container">
        <div
          v-mdb-draggable="{ cursor: 'pointer' }"
          class="dragged-element teal"
        >
          <p>Pointer</p>
        </div>
        <div
          v-mdb-draggable="{ cursor: 'grab' }"
          :style="{ left: 'calc(50% - 60px', top: '380px' }"
          class="dragged-element purple"
        >
          <p>Grab</p>
        </div>
        <div
          v-mdb-draggable
          :style="{ left: 'calc(100% - 120px', top: '150px' }"
          class="dragged-element grey"
        >
          <p>Default</p>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Auto-scroll</h2>
      <div
        class="drag-container"
        id="scroll-container"
        :style="{ maxHeight: '400px', overflow: 'scroll' }"
      >
        <div :style="{ height: '900px', width: '120vw' }">
          <div
            v-mdb-draggable.scroll="{
              scroll: { containerId: 'scroll-container', speed: 10 }
            }"
            class="dragged-element purple"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mdbDraggable } from "mdb-draggable";

export default {
  directives: {
    mdbDraggable
  },
  data() {
    return {
      count: {
        start: 0,
        drag: 0,
        end: 0
      }
    };
  },
  methods: {
    handleStart() {
      this.count.start++;
    },
    handleDrag() {
      this.count.drag++;
    },
    handleEnd() {
      this.count.end++;
    }
  }
};
</script>

<style>
.page-container {
  padding: 2vh 10vw;
  background-color: rgba(0, 0, 0, 0.1s);
}

h1 {
  font-weight: 300;
}

.example-section {
  padding: 20px 0;
}

.example-section h2 {
  font-weight: 300;
}

.example-section p {
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
}

.drag-container {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.09);
}

.dragged-element {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  font-size: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-align: center;
  transition: all 0.4s linear;
  transition-property: background-color;
}

.dragged-element ul {
  padding: 0;
  list-style: none;
}
.dragged-element ul li {
  margin: 5px 0;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.blue {
  background-color: rgba(3, 169, 244, 0.3);
}

.grey {
  background-color: rgba(96, 125, 139, 0.3);
}

.red {
  background-color: rgba(244, 67, 54, 0.3);
}

.green {
  background-color: rgba(76, 175, 80, 0.3);
}

.purple {
  background-color: rgba(156, 39, 176, 0.3);
}

.teal {
  background-color: rgba(0, 150, 136, 0.3);
}
</style>
