import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({ colors, deleteBox }) => {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			{colors.map((color, i) => (
				<DraggableColorBox
					index={i}
					key={color.name}
					color={color.color}
					name={color.name}
					deleteBox={deleteBox}
				/>
			))}
		</div>
	);
});

export default DraggableColorList;
