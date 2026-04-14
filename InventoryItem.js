function InventoryItem ({name, type, quantity=0, price=0}) //set default values for quantity and price
{
	return (
		<div>
			<h2>{name}</h2>
			<b>{type}</b>
			{quantity < 5 ?
				<Message>LOW STOCK! There are only {quantity} remaining</Message> :
				<Message>Inventory Count: {quantity} </Message>
			}
			{(quantity * price) >= 1000 ?
				<Message>BE CAREFUL! This inventory is very valuable and is worth <b>${quantity * price}</b>.</Message> :
				<Message>Total Value: ${quantity * price} </Message>
			}
		</div>
	);
}
